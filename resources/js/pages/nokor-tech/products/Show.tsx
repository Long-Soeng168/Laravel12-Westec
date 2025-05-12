import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link, usePage } from '@inertiajs/react';
import AddToCart from '../components/add-to-cart';
import CarouselWithThumbs from '../components/CarouselWithThumbs';
import MyProductList from '../components/my-product-list';
import MyProductListHeader from '../components/my-product-list-header';
import NokorTechLayout from '../layouts/nokor-tech-layout';
const ProductDetailPage = () => {
    const { itemShow, relatedItems } = usePage().props;
    return (
        <NokorTechLayout>
            <div>
                <div className="mx-auto max-w-screen-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                        {/* Product Image */}
                        {itemShow?.images?.length > 0 && (
                            <div className="flex flex-col items-center p-4 md:w-[40%]">
                                <CarouselWithThumbs images={itemShow?.images || []} />
                            </div>
                        )}

                        {/* Product Details */}
                        <div className="p-6 md:w-1/2">
                            <h1 className="text-foreground text-2xl font-bold md:text-3xl">{itemShow?.name}</h1>
                            {itemShow?.brand?.name && (
                                <p className="text-foreground mt-2 text-base">
                                    Brand:{' '}
                                    <Link className="text-primary hover:underline" href={`/products?brand_code=${itemShow?.brand?.code}`}>
                                        {itemShow?.brand?.name}
                                    </Link>
                                </p>
                            )}
                            {itemShow?.category?.name && (
                                <p className="text-foreground mt-2 text-base">
                                    Category:{' '}
                                    <Link className="text-primary hover:underline" href={`/products?category_code=${itemShow?.category?.code}`}>
                                        {itemShow?.category?.name}
                                    </Link>
                                </p>
                            )}
                            {itemShow?.code && <p className="text-foreground mt-2 text-base">Product Code: {itemShow?.code}</p>}

                            <div className="mt-6 mb-4">
                                <p className="text-2xl font-bold text-red-600">${itemShow?.price}</p>
                            </div>
                            <AddToCart item={itemShow} />
                            {itemShow?.short_description && (
                                <div>
                                    <hr className="my-8" />
                                    <p className="text-foreground mb-2 text-lg font-semibold">Features:</p>
                                    <div className="whitespace-pre-line">{itemShow?.short_description}</div>
                                </div>
                            )}
                        </div>
                    </div>
                    {/* <div className="mt-4 border-t p-4">
                        <p className="mb-2 text-xl font-semibold text-gray-700">Videos:</p>
                        <MyVideoGallery />
                    </div> */}

                    {itemShow?.long_description && (
                        <div className="px-2">
                            <Accordion defaultValue="description" type="single" collapsible>
                                <AccordionItem value="description" className="border-none">
                                    <AccordionTrigger className="border-primary my-4 rounded-none border-b-2 p-0 hover:no-underline">
                                        <span className="bg-primary text-primary-foreground rounded-md rounded-bl-none px-8 py-1 text-lg font-bold">
                                            Descriptions
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base">
                                        <div className="prose ck-content max-w-none">
                                            <div dangerouslySetInnerHTML={{ __html: itemShow?.long_description }} />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    )}

                    {relatedItems?.length > 0 && (
                        <div>
                            <MyProductListHeader title="Related" link={`/products?category_code=${itemShow?.category_code}`} />
                            <MyProductList items={relatedItems} />
                        </div>
                    )}
                </div>
            </div>
        </NokorTechLayout>
    );
};

export default ProductDetailPage;
