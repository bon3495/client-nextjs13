import { z } from 'zod';

export const UserSchema = z.object({
  status: z.number(),
  message: z.string(),
  data: z.object({
    user: z.object({
      _id: z.string(),
      profilePicture: z.string(),
      postsCount: z.number(),
      followersCount: z.number(),
      followingCount: z.number(),
      blocked: z.array(z.string()),
      blockedBy: z.array(z.string()),
      notifications: z.object({
        messages: z.boolean(),
        reactions: z.boolean(),
        comments: z.boolean(),
        follows: z.boolean(),
      }),
      social: z.object({
        facebook: z.string(),
        instagram: z.string(),
        twitter: z.string(),
        youtube: z.string(),
      }),
      work: z.string(),
      school: z.string(),
      location: z.string(),
      quote: z.string(),
      bgImageVersion: z.string(),
      bgImageId: z.string(),
      username: z.string(),
      uId: z.string(),
      email: z.string(),
      avatarColor: z.string(),
      createdAt: z.string(),
      authId: z.string(),
    }),
  }),
  token: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
  }),
});

export type TUserSchema = z.infer<typeof UserSchema>;
