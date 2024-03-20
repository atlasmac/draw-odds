import { z } from 'zod';
import { procedure, router } from '../trpc';
import { PrismaClient } from '@prisma/client';
import NextAuth  from "../../pages/api/auth/[...nextauth]"
import { unstable_getServerSession } from 'next-auth';
import {CreateNextContextOptions} from "@trpc/server/adapters/next";



const prisma = new PrismaClient();

export const appRouter = router({
  userProfile:  procedure.query(async(ctx)=>{
    // const {req, res} = ctx
    // const session = await unstable_getServerSession(ctx.req, ctx.res, NextAuth)

    console.log("Session", JSON.stringify(ctx, null, 2))
    // return {session};
    // prisma.user.findUnique({
    //   where:{
    //     id: NextAuth
    //   }
    // })
  }),
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `hello ${input.text} you are dumb`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;