"use client"
import MessageContainer from "@/components/messageContainer/messageContainer";
import ProfileList from "@/components/profileList/profileList";
import { ProfileData } from "@/types/globalTypes";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<ProfileData[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/room");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  
  return (
    <main className="flex h-screen w-screen">
      <ProfileList profileData={data}/>
      <MessageContainer />
    </main>
  );
}
