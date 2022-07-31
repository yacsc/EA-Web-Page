import * as React from 'react';
import {Text} from '@fluentui/react';
import {Image, IImageProps, ImageFit} from '@fluentui/react/lib/Image';

const imageProps: IImageProps = {
    imageFit: ImageFit.contain,
    src: '../img/foto-inicio.jpg'
}

export const Inicio: React.FunctionComponent = () => {
    return (
        <div>
          <Text variant='xxLarge'>ea! Alta repostería al alcance de su mano :D</Text>
          <Image
            {...imageProps}
            alt='Ven y conócenos a través de nuestros exquisitos chocolates'
            width={200}
            height={200}
            />
        </div>
    );
}