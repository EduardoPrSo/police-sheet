'use client'
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import Button from '@/components/Buttons';
import styles from './page.module.css'

export default function Home() {
  const { data: session } = useSession();

  const user = session?.user;

  return (
    <div className={styles.mainContainer}>
      {!user? (
        <button onClick={() => signIn('discord')}>Entrar com Discord</button>
      ) : (
        <div className={styles.userBox}>
          <Image src={user.image || "/profile_img.png"} alt="Profile Image" width={100} height={100}/>
          <div className={styles.configName}>
            <p>Bem-vindo, {user.name}!</p>
            <p>ID: {user.id}</p>
            <p>Email: {user.email}</p>
          </div>
          <Button label="Botão"></Button>
          <button onClick={() => signOut()}>Sair</button>
        </div>
      )}
    </div>
  );
}
