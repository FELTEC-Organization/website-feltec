function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={`
        bg-zinc-300         /* claro para tema claro */
        dark:bg-zinc-800    /* escuro para tema escuro */
        rounded-md
        ${className}
        animate-pulse
      `}
      {...props}
    />
  )
}

export { Skeleton }
