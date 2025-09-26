import { Button } from "@/components/ui/button";
import { Dot } from "lucide-react";
import { Star } from "lucide-react";
import { Heart } from "lucide-react";

export function ListingGroup({ children }) {
  return <div className="grid grid-cols-7">{children}</div>;
}

export function ListingCard({
  title,
  cover,
  price,
  rating,
  isFavourite = false,
}) {
  return (
    <div className="w-56 m-10">
      <div className="relative mb-2">
        <img
          className="w-full aspect-square object-cover rounded-[1.25rem]"
          src={cover}
        />

        <Button
          variant="outline"
          size="icon"
          className="absolute top-0 right-0 m-2 rounded-full"
        >
          <Heart />
        </Button>

        {isFavourite && (
          <span className="bg-gray-100 inline-block py-2 px-4 font-medium rounded-3xl absolute top-0 left-0 m-2 text-xs shadow-2xl">
            Guest Favourite
          </span>
        )}
      </div>

      <div className="pl-2">
        <h3 className="font-semibold line-clamp-1">{title}</h3>

        <div className="flex items-center text-[#6A6A6A]">
          <span>₹{price}</span>
          <Star className="ms-auto fill-current stroke-0" size={16} />
          {rating.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
