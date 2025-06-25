import CreateChat from "@/components/chatGroup/CreateChat";
import DashNav from "@/components/chatGroup/DashNav";
import React from "react";
import { authOptions, CustomSession } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { fetchChatGroups } from "@/fetch/groupFetch";
import GroupChatCard from "@/components/chatGroup/GroupChatCard";

export default async function dashboard() {
  const session: CustomSession | null = await getServerSession(authOptions);

  if (!session || !session.user?.token) {
    throw new Error("User not authenticated");
  }

  let groups: Array<GroupChatType> = [];

  try {
    groups = await fetchChatGroups(session.user.token);
  } catch (error) {
    console.error("Dashboard fetch error:", error);
    // Optionally rethrow or handle with fallback UI
  }

  return (
    <div>
      <DashNav
        name={session.user.name ?? ""}
        image={session.user.image ?? undefined}
      />
      <div className="container">
        <div className="mt-6 text-end">
          <CreateChat user={session.user} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((item, index) => (
            <GroupChatCard group={item} key={index} user={session.user!} />
          ))}
        </div>
      </div>
    </div>
  );
}
