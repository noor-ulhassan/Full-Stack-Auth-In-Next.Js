"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      console.log("Logout successful");
      router.refresh();
      router.push("/login");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <hr />
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 text-white rounded-3xl py-2 px-4 hover:pointer-cursor"
      >
        Logout
      </button>
    </div>
  );
}
