export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-[100]">
      <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
