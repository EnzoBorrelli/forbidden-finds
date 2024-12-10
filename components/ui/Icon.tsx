import Image from 'next/image';
import React from 'react';

type IconProps = {
  folder: string;
  img: string;
  size: number;
};

export default function Icon({ folder, img, size }: IconProps) {
  const getIcon = () => {// Reemplazar espacios por %20
    return `/horizonIcons/${folder}/${img}.png`;
  };

  return (
    <Image
    className='object-contain aspect-square'
      src={getIcon()} // Aquí invocamos la función para obtener el string
      height={size}
      width={size}
      alt={img} // Alt es el texto alternativo, debe describir la imagen
    />
  );
}
