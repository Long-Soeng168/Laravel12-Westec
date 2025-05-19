import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import useTranslation from '@/hooks/use-translation';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import {
    AppWindowIcon,
    BookmarkCheckIcon,
    BriefcaseBusinessIcon,
    CarIcon,
    FilePenLineIcon,
    FilesIcon,
    GalleryThumbnailsIcon,
    HandshakeIcon,
    Heading1Icon,
    InfoIcon,
    Layers2Icon,
    LayoutDashboardIcon,
    LinkIcon,
    ListOrderedIcon,
    ListTodoIcon,
    MailCheckIcon,
    MailsIcon,
    MessageCircleQuestionIcon,
    PresentationIcon,
    ProjectorIcon,
    ReplaceAllIcon,
    ShapesIcon,
    ShieldCheckIcon,
    SignalIcon,
    SquareUserIcon,
    StoreIcon,
    TagsIcon,
    Tally5Icon,
    TvMinimalPlayIcon,
    UserCogIcon,
    UsersIcon,
    WarehouseIcon,
} from 'lucide-react';
import AppLogo from './app-logo';

export function AppSidebar() {
    const { t, currentLocale } = useTranslation();
    const mainNavItems: NavItem[] = [
        {
            title: t('Dashboard'),
            permission: '',
            url: '/dashboard',
            icon: LayoutDashboardIcon,
        },
        {
            title: t('Items'),
            permission: 'item view',
            url: '/admin/items',
            icon: ListTodoIcon,
            subItems: [
                {
                    title: t('Items'),
                    permission: 'item view',
                    icon: ListTodoIcon,
                    url: '/admin/items',
                },
                {
                    title: t('Categories'),
                    permission: 'item view',
                    icon: Layers2Icon,
                    url: '/admin/item_categories',
                },
                {
                    title: t('Brands'),
                    permission: 'item view',
                    icon: TagsIcon,
                    url: '/admin/item_brands',
                },
                {
                    title: t('Models'),
                    permission: 'item view',
                    icon: BookmarkCheckIcon,
                    url: '/admin/item_models',
                },
                {
                    title: t('Body Types'),
                    permission: 'item view',
                    icon: ShapesIcon,
                    url: '/admin/item_body_types',
                },
                {
                    title: t('View Counts'),
                    permission: 'item view',
                    icon: Tally5Icon,
                    url: '/admin/item_view_counts',
                },
            ],
        },
        {
            title: t('DTC'),
            permission: 'dtc view',
            url: '/admin/dtcs',
            icon: CarIcon,
        },
        {
            title: t('Shops'),
            permission: 'shop view',
            url: '/admin/shops',
            icon: StoreIcon,
        },
        {
            title: t('Garages'),
            permission: 'garage view',
            url: '/admin/garages',
            icon: WarehouseIcon,
            subItems: [
                {
                    title: t('Garages'),
                    permission: 'garage view',
                    url: '/admin/garages',
                    icon: WarehouseIcon,
                },
                {
                    title: t('Posts'),
                    permission: 'garage view',
                    icon: FilePenLineIcon,
                    url: '/admin/garage_posts',
                },
            ],
        },
        {
            title: t('Videos'),
            permission: 'video view',
            url: '/admin/videos',
            icon: TvMinimalPlayIcon,
            subItems: [
                {
                    title: t('Videos'),
                    permission: 'video view',
                    url: '/admin/videos',
                    icon: TvMinimalPlayIcon,
                },
                {
                    title: t('Playlists'),
                    permission: 'video view',
                    url: '/admin/video_play_lists',
                    icon: TvMinimalPlayIcon,
                },
            ],
        },
        {
            title: t('Documents'),
            permission: 'document view',
            url: '',
            external_url: 'https://ata-filesystem.kampu.solutions/',
            icon: FilesIcon,
        },
        {
            title: t('Posts'),
            permission: 'post view',
            url: '/admin/posts',
            icon: FilePenLineIcon,
            subItems: [
                {
                    title: t('Posts'),
                    permission: 'post view',
                    icon: FilePenLineIcon,
                    url: '/admin/posts',
                },
                {
                    title: t('Categories'),
                    permission: 'post view',
                    icon: Layers2Icon,
                    url: '/admin/post_categories',
                },
                // {
                //     title: t('View Counts'),
                //     permission: 'post view',
                //     icon: Tally5Icon,
                //     url: '/admin/post_view_counts',
                // },
            ],
        },
        {
            title: t('Pages'),
            permission: 'page view',
            url: '/admin/pages',
            icon: AppWindowIcon,
            subItems: [
                {
                    title: t('Pages'),
                    permission: 'page view',
                    icon: AppWindowIcon,
                    url: '/admin/pages',
                },
                {
                    title: t('Positions'),
                    permission: 'page view',
                    icon: ReplaceAllIcon,
                    url: '/admin/page_positions',
                },
            ],
        },
        {
            title: t('Messages'),
            permission: 'message view',
            url: '/admin/messages',
            icon: MailsIcon,
            subItems: [
                {
                    title: t('Messages'),
                    permission: 'message view',
                    url: '/admin/messages',
                    icon: MailsIcon,
                },
                {
                    title: t('Message Inquiries'),
                    permission: 'message view',
                    url: '/admin/message_inquiries',
                    icon: MessageCircleQuestionIcon,
                },
            ],
        },
        {
            title: t('Teams and Careers'),
            permission: 'team view',
            url: '/admin/teams',
            icon: SquareUserIcon,
            subItems: [
                {
                    title: t('Teams'),
                    permission: 'team view',
                    url: '/admin/teams',
                    icon: SquareUserIcon,
                },
                {
                    title: t('Team Categories'),
                    permission: 'team view',
                    url: '/admin/team_categories',
                    icon: Layers2Icon,
                },
                {
                    title: t('Career Position'),
                    permission: 'team view',
                    url: '/admin/positions',
                    icon: ReplaceAllIcon,
                },
                {
                    title: t('Careers'),
                    permission: 'team view',
                    url: '/admin/careers',
                    icon: BriefcaseBusinessIcon,
                },
                {
                    title: t('Career Submits'),
                    permission: 'team view',
                    url: '/admin/career_submits',
                    icon: MailCheckIcon,
                },
            ],
        },
        {
            title: t('Orders'),
            permission: 'order view',
            url: '/admin/orders',
            icon: ListOrderedIcon,
        },
        {
            title: t('Banners'),
            permission: 'banner view',
            url: '/admin/banners',
            icon: GalleryThumbnailsIcon,
            subItems: [
                {
                    title: t('Banners'),
                    permission: 'banner view',
                    icon: GalleryThumbnailsIcon,
                    url: '/admin/banners',
                },
                {
                    title: t('Positions'),
                    permission: 'banner view',
                    icon: ReplaceAllIcon,
                    url: '/admin/banner_positions',
                },
            ],
        },
        {
            title: t('Users'),
            permission: 'user view',
            url: '/admin/users',
            icon: UsersIcon,
            subItems: [
                {
                    title: t('Users'),
                    permission: 'user view',
                    icon: UsersIcon,
                    url: '/admin/users',
                },
                {
                    title: t('Roles'),
                    permission: 'role view',
                    icon: UserCogIcon,
                    url: '/admin/roles',
                },
                {
                    title: t('Permissions'),
                    permission: 'permission view',
                    icon: ShieldCheckIcon,
                    url: '/admin/permissions',
                },
            ],
        },
        {
            title: t('Projects'),
            permission: 'project view',
            url: '/admin/projects',
            icon: ProjectorIcon,
        },
        {
            title: t('Partners'),
            permission: 'partner view',
            url: '/admin/partners',
            icon: HandshakeIcon,
        },
        {
            title: t('Phone Companies'),
            permission: 'phone_company view',
            url: '/admin/phone_companies',
            icon: SignalIcon,
        },
        {
            title: t('Courses'),
            permission: 'course view',
            url: '/admin/courses',
            icon: PresentationIcon,
        },
        {
            title: t('Headings'),
            permission: 'heading view',
            url: '/admin/headings',
            icon: Heading1Icon,
        },
        {
            title: t('Links'),
            permission: 'link view',
            url: '/admin/links',
            icon: LinkIcon,
        },
        {
            title: t('Application Info'),
            permission: 'application_info view',
            url: '/admin/application_info',
            icon: InfoIcon,
        },
        {
            title: t('Types'),
            permission: 'type view',
            url: '/admin/types',
            icon: ShapesIcon,
        },
    ];

    const footerNavItems: NavItem[] = [
        {
            permission: 'sample_content view',
            title: t('Sample Content'),
            url: '/admin/ckeditor5',
            icon: FilePenLineIcon,
        },
        // {
        //     title: 'File Manager',
        //     url: '/admin/my_file_manager',
        //     icon: Folder,
        // },
    ];
    return (
        <Sidebar collapsible="icon" variant="inset" className={`${currentLocale == 'kh' ? 'font-siemreap-regular' : 'font-poppins-regular'}`}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
