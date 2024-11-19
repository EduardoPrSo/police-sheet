import { NextResponse } from 'next/server';
import { Redis } from "@upstash/redis";
import db from '../lib/db';

export async function GET() {
    const redis = Redis.fromEnv();
    const cacheKey = "police-users";

    try {
        const cachedPoliceUsers = await redis.get(cacheKey);

        if (cachedPoliceUsers) {
            try {
                return NextResponse.json(cachedPoliceUsers);
            } catch (parseError) {
                console.error("Erro ao parsear os dados do Redis:", parseError);
                await redis.del(cacheKey);
            }
        }

        const policeList = await getPoliceList();
        await redis.set(cacheKey, JSON.stringify(policeList), { ex: 5 * 60 });
        return NextResponse.json(policeList);
    } catch (error) {
        console.error("Erro ao acessar o Redis ou o banco de dados:", error);
        return NextResponse.json({ error: "Erro interno no servidor" }, { status: 500 });
    }
}

async function getPoliceList() {
    return new Promise((resolve, reject) => {
        db.query(`
            SELECT pg.group, pg.division, pg.user_id, pg.rank, chars.name, chars.name2, chars.serial
            FROM permissions_groups AS pg
            INNER JOIN characters AS chars ON chars.id = pg.user_id
            WHERE pg.group = 'Police'
        `, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}
