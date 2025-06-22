import Image from "next/image";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    id: 1,
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: "/assets/avatar-1.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    id: 2,
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: "/assets/avatar-2.png",
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    id: 3,
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: "/assets/avatar-3.png",
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    id: 4,
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: "/assets/avatar-4.png",
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    id: 5,
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: "/assets/avatar-5.png",
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    id: 6,
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: "/assets/avatar-6.png",
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    id: 7,
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: "/assets/avatar-7.png",
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    id: 8,
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: "/assets/avatar-8.png",
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    id: 9,
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: "/assets/avatar-9.png",
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstCol = testimonials.slice(0, 3);
const secondCol = testimonials.slice(3, 6);
const thirdCol = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => (
  <div
    className={twMerge(
      "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
      props.className
    )}
  >
    {props.testimonials.map(({ id, text, imageSrc, name, username }) => (
      <div key={id} className="p-10 rounded-3xl shadow-md max-w-lg w-full">
        <div>{text}</div>
        <div className="flex gap-2 items-center mt-5">
          <Image
            src={imageSrc}
            alt={imageSrc}
            width={50}
            height={50}
            className="rounded-full"
          />{" "}
          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">{name}</div>
            <div className="tracking-tight leading-5">{username}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="w-[80%] mx-auto flex flex-col items-center justify-center">
        <div className="tag">Testimonials</div>
        <div className="max--w-[900px] text-center">
          <h2 className="title-section">What Our Users Are Saying</h2>
        </div>
        <p className="description-section">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est ipsum
          libero consequatur vel at voluptatem facilis enim ea odio voluptatum.
        </p>

        <div className="flex justify-center gap-6">
          <TestimonialsColumn testimonials={firstCol} />
          <TestimonialsColumn
            testimonials={secondCol}
            className="hidden md:flex"
          />
          <TestimonialsColumn
            testimonials={thirdCol}
            className="hidden lg:flex"
          />
        </div>
      </div>
    </section>
  );
};
