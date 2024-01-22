import NextAuth from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord'

export default NextAuth({
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID || "clientId",
      clientSecret: process.env.DISCORD_CLIENT_SECRET || "clientSecret",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token }) {
      return token
    },
    async session({ session, token }) {
      Object.assign(session, {
        user: {
            ...session.user,
            id: token.sub
        }
      })
      return session
    }
  }
})