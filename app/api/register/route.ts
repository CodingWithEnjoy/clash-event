import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function POST(req: Request) {
  try {
    console.log("➡️ API HIT");

    const formData = await req.formData();
    console.log("➡️ FormData received");

    const full_name = formData.get("full_name");
    const game_username = formData.get("game_username");
    const file = formData.get("image");

    console.log("full_name:", full_name);
    console.log("game_username:", game_username);
    console.log("file:", file);

    // --- CHECK 1: file exists ---
    if (!file || !(file instanceof File)) {
      console.log("❌ No file received");
      return NextResponse.json({ error: "Missing file" }, { status: 400 });
    }

    // --- Upload file ---
    const ext = file.name.split(".").pop();
    const fileName = `${Date.now()}.${ext}`;
    const filePath = `user-images/${fileName}`;

    console.log("➡️ Uploading file to Supabase…");

    const { error: uploadError } = await supabase.storage
      .from("event-signups")
      .upload(filePath, file, {
        contentType: file.type,
      });

    if (uploadError) {
      console.log("❌ Upload error:", uploadError);
      return NextResponse.json({ error: uploadError.message }, { status: 500 });
    }

    console.log("➡️ File uploaded");

    // Get public URL
    const { data: urlData } = supabase.storage
      .from("event-signups")
      .getPublicUrl(filePath);

    console.log("Image URL:", urlData.publicUrl);

    // Insert DB row
    const { error: insertError } = await supabase.from("registrations").insert({
      full_name,
      game_username,
      payment_image_url: urlData.publicUrl,
    });

    if (insertError) {
      console.log("❌ DB insert error:", insertError);
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    console.log("✔ Done");

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log("❌ SERVER CRASH:", err);
    return NextResponse.json({ error: "Server crashed" }, { status: 500 });
  }
}
