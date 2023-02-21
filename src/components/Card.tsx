import Image from "next/image";
import Link from "next/link";

const placeholderImg = "/images/mintbase-symbol-250x250.png";

const Card = ({
  coverImage,
  title,
  isLoading,
  description,
  minter,
  price,
}: {
  coverImage: string;
  title: string;
  isLoading: boolean;
  description: string;
  minter: string;
  price: string;
  actionLabel?: string;
}) => {
  return (
    <>
      <div className="my-10 p-5 w-64 rounded-md shadow-xl border border-1">
        <div className="h-48 relative">
          <Image
            src={coverImage ?? placeholderImg}
            loader={() => coverImage ?? placeholderImg}
            alt={title ?? "nft"}
            objectFit="cover"
            fill
          />
        </div>
        <h2 className="text-md font-bold mt-3 truncate">
          {isLoading ? "Title" : title}
        </h2>
        <div className="flex justify-between items-center text-sm">
          <p className="text-gray-400 text-sm truncate">
            {isLoading ? "Description" : description}
          </p>
        </div>
        <p className="bg-gray-600 h-[0.5px] w-full my-2"></p>
        <div className="flex items-center">
          <Image
            placeholder="blur"
            blurDataURL={`https://avatar.vercel.sh/${"minter"}`}
            src={`https://avatar.vercel.sh/${"minter"}`}
            alt={minter ?? ""}
            className="h-8 w-8 border border-white rounded-full mr-2"
            width="288"
            height="96"
          />
          <div className="text-gray-400 text-[12px]">
            <p>Minted by </p>
            <Link
              href={`https://nearblocks.io/address/${minter}`}
              target="_blank"
              rel="noreferrer"
              className="font-bold hover:text-black truncate"
            >
              {minter}
            </Link>
          </div>
        </div>
        <button className="bg-black text-white w-full rounded mt-4 py-1 px-2 text-sm truncate">
          Buy {price}N
        </button>
      </div>
    </>
  );
};

export default Card;
