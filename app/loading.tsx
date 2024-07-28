import Image from "next/image";

export default function Loading() {
  <section className="w-full h-full m-auto flex items-center justify-center px-14">
    <Image
      src="/assets/loading.gif"
      width={500}
      height={500}
      alt="Loading GIF"
    />
  </section>;
}
