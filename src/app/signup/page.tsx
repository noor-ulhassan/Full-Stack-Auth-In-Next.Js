"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";

export default function SignupPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const onSignup = async () => {};
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0f172a] selection:bg-indigo-500/30">
      <div className="w-full max-w-md p-10 bg-[#1e293b]/50 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-white tracking-tight">
            Join Us
          </h1>
          <p className="mt-2 text-slate-400">Start your journey today.</p>
        </div>

        <div className="space-y-5">
          <div className="group">
            <label
              htmlFor="username"
              className="block mb-2 ml-1 text-xs font-semibold uppercase tracking-wider text-slate-500 group-focus-within:text-indigo-400 transition-colors"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
              placeholder="Enter username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
            />
          </div>

          <div className="group">
            <label
              htmlFor="email"
              className="block mb-2 ml-1 text-xs font-semibold uppercase tracking-wider text-slate-500 group-focus-within:text-indigo-400 transition-colors"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
              placeholder="name@example.com"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>

          <div className="group">
            <label
              htmlFor="password"
              className="block mb-2 ml-1 text-xs font-semibold uppercase tracking-wider text-slate-500 group-focus-within:text-indigo-400 transition-colors"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all"
              placeholder="••••••••"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </div>

          <button
            type="submit"
            onClick={onSignup}
            className="w-full py-4 mt-6 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-[0.97] rounded-2xl transition-all duration-200"
          >
            Create Account
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-slate-500">
          Already a member?{" "}
          <span className="text-indigo-400 font-medium hover:text-indigo-300 cursor-pointer transition-colors">
            <Link href="/login">
              {" "}
              <span className="underline">Sign in</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
