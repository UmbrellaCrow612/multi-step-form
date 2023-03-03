import Form from "@/components/Form";

export default function Page() {
  return (
    <div className="grid min-h-screen place-content-center bg-[#d6d9e6] bg-opacity-80">
      <Form previousPageUrl="/plan" nextPageUrl="/summary">
        <div className="h-full pt-6 pl-20">
          <h1 className="text-3xl font-bold leading-tight">Pick Add-ons</h1>
          <p className="mt-3 text-sm text-gray-400">
            Add-ons help enhance your gaming experience
          </p>

          
        </div>
      </Form>
    </div>
  );
}
