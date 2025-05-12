import DeleteButton from '@/components/delete-button';
import MyImageGallery from '@/components/my-image-gallery';
import MyNoData from '@/components/my-no-data';
import { MyTooltipButton } from '@/components/my-tooltip-button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import usePermission from '@/hooks/use-permission';
import useTranslation from '@/hooks/use-translation';
import { Link, router, usePage } from '@inertiajs/react';
import { ArrowUpDown, ScanEyeIcon } from 'lucide-react';
import { useState } from 'react';

const MyTableData = () => {
    const { t } = useTranslation();

    const hasPermission = usePermission();

    const { tableData } = usePage().props;
    const queryParams = new URLSearchParams(window.location.search);
    const currentPath = window.location.pathname; // Get dynamic path

    const handleSort = (fieldName: string) => {
        if (fieldName === queryParams.get('sortBy')) {
            if (queryParams.get('sortDirection') === 'asc') {
                queryParams.set('sortDirection', 'desc');
            } else {
                queryParams.set('sortDirection', 'asc');
            }
        } else {
            queryParams.set('sortBy', fieldName);
            queryParams.set('sortDirection', 'asc');
        }
        router.get(currentPath + '?' + queryParams.toString());
    };

    const [selectedImages, setSelectedImages] = useState([]);
    const [isOpenViewImages, setIsOpenViewImages] = useState(false);

    return (
        <>
            <ScrollArea className="w-full rounded-md border">
                <MyImageGallery
                    imagePath="/assets/images/items/"
                    selectedImages={selectedImages}
                    isOpenViewImages={isOpenViewImages}
                    setIsOpenViewImages={setIsOpenViewImages}
                />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">{t('No')}</TableHead>
                            <TableHead className="text-left">{t('Action')}</TableHead>
                            <TableHead onClick={() => handleSort('name')}>
                                <span className="flex cursor-pointer items-center">
                                    <ArrowUpDown size={16} /> {t('Name')}
                                </span>
                            </TableHead>
                            <TableHead onClick={() => handleSort('phone')}>
                                <span className="flex cursor-pointer items-center">
                                    <ArrowUpDown size={16} /> {t('Phone')}
                                </span>
                            </TableHead>
                            <TableHead onClick={() => handleSort('note')}>
                                <span className="flex cursor-pointer items-center">
                                    <ArrowUpDown size={16} /> {t('Note')}
                                </span>
                            </TableHead>
                            <TableHead onClick={() => handleSort('total')}>
                                <span className="flex cursor-pointer items-center">
                                    <ArrowUpDown size={16} /> {t('Total')}
                                </span>
                            </TableHead>
                            <TableHead> {t('Total Items')}</TableHead>
                            <TableHead onClick={() => handleSort('created_at')}>
                                <span className="flex cursor-pointer items-center">
                                    <ArrowUpDown size={16} /> {t('Order at')}
                                </span>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tableData?.data?.map((item: any, index: number) => (
                            <TableRow key={item.id}>
                                <TableCell className="font-medium">
                                    {tableData?.current_page > 1 ? tableData?.per_page * (tableData?.current_page - 1) + index + 1 : index + 1}
                                </TableCell>
                                <TableCell>
                                    <span className="flex h-full items-center justify-start">
                                        <Link href={`/admin/orders/${item.id}`}>
                                            <MyTooltipButton title={t('Show')} side="bottom" variant="ghost">
                                                <ScanEyeIcon />
                                            </MyTooltipButton>
                                        </Link>
                                        {hasPermission('message delete') && <DeleteButton deletePath="/admin/orders/" id={item.id} />}
                                    </span>
                                </TableCell>

                                <TableCell>{item.name || '---'}</TableCell>
                                <TableCell>{item.phone || '---'}</TableCell>
                                <TableCell>{item.note || '---'}</TableCell>
                                <TableCell>
                                    <span className="text-destructive whitespace-nowrap">$ {item.total || '---'}</span>
                                </TableCell>
                                <TableCell>{item.order_items_count || '---'}</TableCell>
                                <TableCell className="whitespace-nowrap">
                                    {item.created_at
                                        ? new Date(item.created_at).toLocaleDateString('en-UK', {
                                              year: 'numeric',
                                              month: 'long',
                                              day: 'numeric',
                                          })
                                        : '---'}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

                <ScrollBar orientation="horizontal" />
            </ScrollArea>

            {tableData?.data?.length < 1 && <MyNoData />}
        </>
    );
};

export default MyTableData;
