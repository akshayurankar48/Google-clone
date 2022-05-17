import Head from "next/head";
import Avatar from "../components/Avatar";
import { ViewGridIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;

    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google 2.0</title>
        <link
          rel="icon"
          href="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-512.png"
        />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover: bg-gray-100 cursor-pointer" />

          {/* Avatar */}
          <Avatar url="https://static.theceomagazine.net/wp-content/uploads/2018/10/15093202/elon-musk.jpg" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-4 flex-grow w-4/5">
        <Image
          src="https://cdn4.iconfinder.com/data/icons/google-3/1000/Google_2015_logo-512.png"
          height={300}
          width={300}
          alt="google"
        />

        <div className="flex w-full mt-2 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none "
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I am Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
