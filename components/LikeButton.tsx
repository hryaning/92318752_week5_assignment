"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    return (
    <Button onClick={() => setLikes(likes + 1)}>
        ♥ 좋아요 {likes}
    </Button>
    );
}