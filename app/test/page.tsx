import React from "react";

const TestPage = () => {
  const handleForm = async (formData) => {
    "use server";
    console.log(formData);
    const title = formData.get("title");
    console.log("Hello, " + title);
  };

  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="title" placeholder="Title" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestPage;
