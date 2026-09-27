export type TechItem = {
  name: string;
  duty: string;
  image: { light: string; dark?: string; width: number; height: number };
  progress: number;
};

export const techStack: TechItem[] = [
  {
    name: "Adobe Photoshop",
    duty: "Photo editing & compositing",
    image: { light: "/assets/images/khalid/svg/Photoshop.svg", width: 28, height: 28 },
    progress: 100,
  },
  {
    name: "Adobe Illustrator",
    duty: "Vector graphics & logo design",
    image: { light: "/assets/images/khalid/svg/Illustrator.svg", width: 28, height: 28 },
    progress: 100,
  },
  {
    name: "Adobe Premiere Pro",
    duty: "Professional video editing",
    image: { light: "/assets/images/khalid/svg/PremierePro.svg", width: 28, height: 28 },
    progress: 70,
  },
  {
    name: "Adobe After Effects",
    duty: "Motion graphics & visual effects",
    image: { light: "/assets/images/khalid/svg/AfterEffects.svg", width: 28, height: 28 },
    progress: 60,
  },
  {
    name: "Adobe InDesign",
    duty: "Print & publication design",
    image: { light: "/assets/images/khalid/svg/InDesign.svg", width: 28, height: 28 },
    progress: 80,
  },
  {
    name: "Adobe Lightroom",
    duty: "Photo retouching & color grading",
    image: { light: "/assets/images/khalid/svg/Lightroom.svg", width: 28, height: 28 },
    progress: 90,
  },
  {
    name: "Figma",
    duty: "UI & digital design",
    image: { light: "/assets/images/khalid/svg/Figma.svg", width: 19, height: 28 },
    progress: 60,
  },
  {
    name: "Blender",
    duty: "3D modeling & animation",
    image: { light: "/assets/images/khalid/svg/Blender.svg", width: 28, height: 28 },
    progress: 40,
  },
  {
    name: "Canva",
    duty: "Quick social media design",
    image: { light: "/assets/images/khalid/svg/Canva.svg", width: 28, height: 28 },
    progress: 100,
  },
];
