import Link from 'next/link';
import Image from 'next/image';

const MyAvatar = () => {
  return (
    <div>
      <Image
      className="rounded-full"
        src="/avatar.jpg"
        width={84}
        height={84}
      />
    </div>
  );
};

export default MyAvatar;
