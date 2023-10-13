import create from "zustand";
import { persist } from "zustand/middleware";

export const useForumStore = create(
  persist(
    (set) => ({
      forums: [],
      comments: {},
      users: null,
      addForum: (newForum) => {
        set((state) => ({ forums: [...state.forums, newForum] }));
      },
      addComment: (forumId, newComment) => {
        set((state) => {
          const updatedComments = state.comments[forumId]
            ? [...state.comments[forumId], newComment]
            : [newComment];

          return {
            comments: { ...state.comments, [forumId]: updatedComments },
          };
        });
      },
      login: () => {
        set({ loggedIn: true });
      },
      logout: () => {
        set({ loggedIn: false });
      },
      setUser: (user) => {
        set({ user });
      },
    }),
    {
      name: "forum-store", // Name for the store in localStorage
      getStorage: () => localStorage, // Storage mechanism
    }
  )
);
