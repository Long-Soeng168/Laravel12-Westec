import DeleteButton from '@/components/delete-button';
import MyImageGallery from '@/components/my-image-gallery';
import MyNoData from '@/components/my-no-data';
import MyUpdateStatusButton from '@/components/my-update-status-button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import usePermission from '@/hooks/use-permission';
import useTranslation from '@/hooks/use-translation';
import { router, usePage } from '@inertiajs/react';
import { ArrowUpDown } from 'lucide-react';
import { useState } from 'react';
import EditButton from './edit-button';
import ViewButton from './view-button';

const MyTableData = () => {
    const hasPermission = usePermission();
    const { t } = useTranslation();
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
                    imagePath="/assets/images/item_models/"
                    selectedImages={selectedImages}
                    isOpenViewImages={isOpenViewImages}
                    setIsOpenViewImages={setIsOpenViewImages}
                />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[50px]">{t('No')}</TableHead>
                            <TableHead className="text-left">{t('Action')}</TableHead>
                            <TableHead>{t('Image')}</TableHead>

                            <TableHead onClick={() => handleSort('code')}>
                                <span className="flex cursor-pointer items-center">
                                    <ArrowUpDown size={16} /> {t('Code')}
                                </span>
                            </TableHead>
                            <TableHead onClick={() => handleSort('name')}>
                                <span className="flex cursor-pointer items-center">
                                    <ArrowUpDown size={16} /> {t('Name')}
                                </span>
                            </TableHead>
                            <TableHead onClick={() => handleSort('name_kh')}>
                                <span className="flex cursor-pointer items-center">
                                    <ArrowUpDown size={16} /> {t('Name Khmer')}
                                </span>
                            </TableHead>
                            <TableHead onClick={() => handleSort('status')}>
                                <span className="flex cursor-pointer items-center">
                                    <ArrowUpDown size={16} /> {t('Status')}
                                </span>
                            </TableHead>
                            <TableHead onClick={() => handleSort('brand_code')}>
                                <span className="flex cursor-pointer items-center">
                                    <ArrowUpDown size={16} /> {t('Brand')}
                                </span>
                            </TableHead>
                            <TableHead>{t('Created at')}</TableHead>
                            <TableHead>{t('Updated at')}</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tableData?.data?.map((item: any, index: number) => {
                            return (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">
                                        {tableData?.current_page > 1 ? tableData?.per_page * (tableData?.current_page - 1) + index + 1 : index + 1}
                                    </TableCell>
                                    <TableCell>
                                        <span className="flex h-full items-center justify-start">
                                            <ViewButton item={item} />
                                            {hasPermission('item delete') && <DeleteButton deletePath="/admin/item_models/" id={item.id} />}
                                            {hasPermission('item update') && <EditButton item={item} />}
                                        </span>
                                    </TableCell>
                                    <TableCell>
                                        {item.image ? (
                                            <button
                                                onClick={() => {
                                                    setSelectedImages([{ image: item.image }]);
                                                    setIsOpenViewImages(true);
                                                }}
                                                className="cursor-pointer"
                                            >
                                                <img
                                                    src={`/assets/images/item_models/thumb/` + item.image}
                                                    width={100}
                                                    height={100}
                                                    alt=""
                                                    className="size-10 object-contain transition-all duration-300 hover:scale-150"
                                                />
                                            </button>
                                        ) : (
                                            <img
                                                src={`/assets/icons/image-icon.png`}
                                                width={100}
                                                height={100}
                                                alt=""
                                                className="size-10 object-contain"
                                            />
                                        )}
                                    </TableCell>
                                    <TableCell>{item.code || '---'}</TableCell>
                                    <TableCell>{item.name || '---'}</TableCell>
                                    <TableCell>{item.name_kh || '---'}</TableCell>
                                    {/* <TableCell>{item.image || '---'}</TableCell> */}
                                    <TableCell>
                                        {hasPermission('item update') ? (
                                            <MyUpdateStatusButton
                                                id={item.id}
                                                pathName="/admin/item_models"
                                                currentStatus={item.status}
                                                statuses={['active', 'inactive']}
                                            />
                                        ) : (
                                            <span className="capitalize">{item.status}</span>
                                        )}
                                    </TableCell>
                                    <TableCell>{item.brand_code || '---'}</TableCell>
                                    <TableCell>
                                        {item.created_at
                                            ? new Date(item.created_at).toLocaleDateString('en-UK', {
                                                  year: 'numeric',
                                                  month: 'long',
                                                  day: 'numeric',
                                              })
                                            : '---'}
                                    </TableCell>
                                    <TableCell>
                                        {item.updated_at
                                            ? new Date(item.updated_at).toLocaleDateString('en-UK', {
                                                  year: 'numeric',
                                                  month: 'long',
                                                  day: 'numeric',
                                              })
                                            : '---'}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>

                <ScrollBar orientation="horizontal" />
            </ScrollArea>
            {tableData?.data?.length < 1 && <MyNoData />}
        </>
    );
};

export default MyTableData;
