import Image from 'next/image';
import { BiHomeCircle } from 'react-icons/bi';
import { HiOutlineHashtag } from 'react-icons/hi';
import { BsBell, BsBookmark } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { HiEnvelope } from 'react-icons/hi2';
import Link from 'next/link';

const navigation_items = [
  {
    title: 'Home',
    icon: BiHomeCircle,
  },
  {
    title: 'Explore',
    icon: HiOutlineHashtag,
  },
  {
    title: 'Notifications',
    icon: BsBell,
  },
  {
    title: 'Messages',
    icon: HiEnvelope,
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark,
  },
  {
    title: 'Profile',
    icon: BiUser,
  },
];

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-lg w-full h-full flex relative">
        <section className="fixed w-72 flex flex-col">
          {navigation_items.map((item) => (
            <Link
              className="bg-white/50 rounded-3xl p-4 flex items-center justify-center space-x-2"
              href={`/${item.title.toLowerCase()}`}
              key={item.title}
            >
              <div>
                <item.icon />
              </div>
              <div>{item.title}</div>
            </Link>
          ))}
        </section>
        <main>Home Timeline</main>
        <section>Right section</section>
      </div>
    </div>
  );
}
