'use client'; import * as React from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType,
} from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react'; import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import PropTypes from 'prop-types'; plugins?: CarouselPlugin; orientation?: 'horizontal' | 'vertical'; setApi?: (api=> void;
}; api useEmblaCarousel>[1]; scrollPrev=> void; scrollNext=> void; canScrollPrev: boolean; canScrollNext: boolean;
} & CarouselProps; const CarouselContext = React.createContext(null); function useCarousel() { const context = React.useContext(CarouselContext); if (!context) { throw new Error('useCarousel must be used within a '); } return context;
} const Carousel = React.forwardRef< HTMLDivElement, React.HTMLAttributes & CarouselProps
>( ( { orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }, ref ) => { const [carouselRef, api] = useEmblaCarousel( { ...opts, axis=== 'horizontal' ? 'x' : 'y', }, plugins ); const [canScrollPrev, setCanScrollPrev] = React.useState(false); const [canScrollNext, setCanScrollNext] = React.useState(false); const onSelect = React.useCallback((api=> { if (!api) { return; } setCanScrollPrev(api.canScrollPrev()); setCanScrollNext(api.canScrollNext()); }, []); const scrollPrev = React.useCallback(() => { api?.scrollPrev(); }, [api]); const scrollNext = React.useCallback(() => { api?.scrollNext(); }, [api]); const handleKeyDown = React.useCallback( (event=> { if (event.key === 'ArrowLeft') { event.preventDefault(); scrollPrev(); } else if (event.key === 'ArrowRight') { event.preventDefault(); scrollNext(); } }, [scrollPrev, scrollNext] ); React.useEffect(() => { if (!api || !setApi) { return; } setApi(api); }, [api, setApi]); React.useEffect(() => { if (!api) { return; } onSelect(api); api.on('reInit', onSelect); api.on('select', onSelect); return () => { api?.off('select', onSelect); }; }, [api, onSelect]); return ( {children} ); }
);
Carousel.displayName = 'Carousel'; const CarouselContent = React.forwardRef< HTMLDivElement, React.HTMLAttributes
>(({ className, ...props }, ref) => { const { carouselRef, orientation } = useCarousel(); return ( );
});
CarouselContent.displayName = 'CarouselContent'; const CarouselItem = React.forwardRef< HTMLDivElement, React.HTMLAttributes
>(({ className, ...props }, ref) => { const { orientation } = useCarousel(); return ( );
});
CarouselItem.displayName = 'CarouselItem'; const CarouselPrevious = React.forwardRef< HTMLButtonElement, React.ComponentProps
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => { const { orientation, scrollPrev, canScrollPrev } = useCarousel(); return ( Previous slide );
});
CarouselPrevious.displayName = 'CarouselPrevious'; const CarouselNext = React.forwardRef< HTMLButtonElement, React.ComponentProps
>(({ className, variant = 'outline', size = 'icon', ...props }, ref) => { const { orientation, scrollNext, canScrollNext } = useCarousel(); return ( Next slide );
});
CarouselNext.displayName = 'CarouselNext'; export { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext,
};
