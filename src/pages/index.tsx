import Form from "@/components/Form";

export default function Page() {
  return (
    <div className="grid min-h-screen place-content-center bg-[#d6d9e6] bg-opacity-80">
      <Form previousPageUrl="" nextPageUrl="/plan">
        <div className="h-full pt-6 pl-20">
          <h1 className="text-3xl font-bold leading-tight">Personal info</h1>
          <p className="mt-3 text-sm text-gray-400">
            Please provide your name, email address and phone number
          </p>
          <div className="flex flex-col w-full gap-3 pr-4 mt-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="max-w-sm px-2 py-3 border border-gray-200 rounded-md shadow-sm "
              placeholder="e . g Yousaf Wazir"
            />
          </div>
          <div className="flex flex-col w-full gap-3 pr-4 mt-4">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="max-w-sm px-2 py-3 border border-gray-200 rounded-md shadow-sm "
              placeholder="e . g name@gmail.com"
            />
          </div>
          <div className="flex flex-col w-full gap-3 pr-4 mt-4">
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="max-w-sm px-2 py-3 border border-gray-200 rounded-md shadow-sm "
              placeholder="e . g name@gmail.com"
            />
          </div>
          <button className="hidden">Next</button>{" "}
          {/* When next is click fire off a function on the next button to check if the things have been filled out */}
        </div>
      </Form>
    </div>
  );
}
