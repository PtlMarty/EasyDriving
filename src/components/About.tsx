const About = () => {
  return (
    <>
      <main className="flex items-center justify-center">
        <section className=" grid-flow-col grid-cols-2 gap-8 max-w-full m-16 items-center hidden md:grid">
          <aside className="grid gap-4">
            <h2 className="text-4xl text-primary font-extrabold">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quis perspiciatis accusantium. Doloribus commodi, repudiandae
              minus eaque, quaerat magnam nostrum, quo sint animi soluta
              obcaecati pariatur aliquam deserunt expedita! Illum.
            </p>
          </aside>
          <aside className="rounded-md">
            <img
              src="https://plus.unsplash.com/premium_photo-1663047248264-24aa25b1433e?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="group"
              className="object-cover w-[768px] rounded-xl"
            />
          </aside>
        </section>
      </main>
    </>
  );
};

export default About;