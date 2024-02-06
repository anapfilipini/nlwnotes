export function NoteCard() {
  return (
    <button className="rounded-md text-left outline-none bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 focus:ring-2 focus:ring-lime-400">
      <span className=" text-sm font-medium text-slate-200">Há 2 dias</span>
      <p className=" text-sm leading-6 text-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        laudantium, nobis quod totam quam voluptas culpa, doloribus molestias
        esse ex cumque dignissimos odio illum laboriosam ea adipisci perferendis
        perspiciatis unde! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Praesentium laudantium, nobis quod totam quam voluptas culpa,
        doloribus molestias esse ex cumque dignissimos odio illum laboriosam ea
        adipisci perferendis perspiciatis unde!
      </p>

      <div className=" absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
