import * as React from "react";
import Image from "next/image";
import { CulturalExperiences } from "@/lib/const";

export default function CulturalExp() {
    return (
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4">
            {CulturalExperiences.map((exp, idx) => (
                <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden"
                >
                    <Image
                        src={exp.image}
                        alt={exp.title}
                        width={600}
                        height={320}
                        className="w-full h-56 object-cover"
                    />
                    <div className="p-6">
                        <h3 className="text-xl font-extrabold text-primary mb-2">{exp.title}</h3>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}