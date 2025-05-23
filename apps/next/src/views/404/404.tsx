import Image from 'next/image';

export const NotFound = () => {
  return (
    <div className="flex flex-1 w-full items-center justify-center p-4 sm:p-8">
      <div className="text-center space-y-4 w-full max-w-xl">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-xl">Страница не найдена</p>
        <div className="relative w-full aspect-square">
          <Image
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDhvYWswMngwcjFub2YyeGwwdXcxNTNpbjBrdmx3ZnA1MWhxOW95bCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ZE5DmCqNMr3yDXq1Zu/giphy.gif"
            alt="404 GIF"
            fill
            className="object-contain"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};
