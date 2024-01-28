interface IICon {
    name?: string;
    alternativeText?: string | null;
    caption?: string | null;
    width?: number | null;
    height?: number | null;
    formats?: string | null;
    hash?: string | null;
    ext?: string | null;
    mime?: string | null;
    size?: number | null;
    url?: string | null;
    previewUrl?: string | null;
    provider?: string | null;
    provider_metadata?: string | null;
    createdAt?: string | null;
    updatedAt?: string | null;
}

interface IAttributes extends IICon {
    publishedAt?: string;
    ServiceGroupName?: string;
    short_description?: string;
    priority_number?: number | null;
    status?: boolean;
    Services?: IService[];
    icon_dvService?: IResponse;
    icon_banner?: IResponse;
}

interface IService {
    id?: number;
    service_name?: string;
    service_description?: string;
    status?: boolean | null;
    priority_number?: number | null;
}

export interface IData {
    id?: number;
    attributes?: IAttributes;
}

interface IMeta {
    pagination: {
        page: number;
        pageSize: number;
        pageCount: number;
        total: number;
    };
}

export interface IResponse {
    data: IData[] | IData | null;
    meta?: IMeta;
}

export const data: IResponse = {
    data: [
        {
            id: 8,
            attributes: {
                createdAt: '2024-01-25T05:28:33.443Z',
                updatedAt: '2024-01-25T05:30:22.344Z',
                publishedAt: '2024-01-25T05:30:22.339Z',
                ServiceGroupName: 'VNPT Application Integration',
                short_description: 'Cung cấp nền tảng truyền nhận dữ liệu, tin nhắn (Message)',
                priority_number: 8,
                status: true,
                Services: [],
                icon_dvService: {
                    data: null,
                },
                icon_banner: {
                    data: null,
                },
            },
        },
        {
            id: 6,
            attributes: {
                createdAt: '2024-01-25T05:27:50.197Z',
                updatedAt: '2024-01-25T05:30:31.593Z',
                publishedAt: '2024-01-25T05:30:31.589Z',
                ServiceGroupName: 'VNPT Backup',
                short_description:
                    'Cung cấp các dịch vụ sao lưu dữ liệu quan trọng lên Cloud một cách an toàn',
                priority_number: 6,
                status: true,
                Services: [],
                icon_dvService: {
                    data: null,
                },
                icon_banner: {
                    data: null,
                },
            },
        },
        {
            id: 3,
            attributes: {
                createdAt: '2024-01-25T05:26:29.942Z',
                updatedAt: '2024-01-26T07:29:49.550Z',
                publishedAt: '2024-01-25T05:30:35.350Z',
                ServiceGroupName: 'VNPT Container',
                short_description: 'Cung cấp nền tảng hỗ trợ Container như Registry, Kubernetes',
                priority_number: 3,
                status: true,
                Services: [],
                icon_dvService: {
                    data: {
                        id: 8,
                        attributes: {
                            name: 'dv3.svg',
                            alternativeText: null,
                            caption: null,
                            width: 58,
                            height: 58,
                            formats: null,
                            hash: 'dv3_f467e432b4',
                            ext: '.svg',
                            mime: 'image/svg+xml',
                            size: 24.41,
                            url: '/uploads/dv3_f467e432b4.svg',
                            previewUrl: null,
                            provider: 'local',
                            provider_metadata: null,
                            createdAt: '2024-01-26T07:29:41.027Z',
                            updatedAt: '2024-01-26T07:29:41.027Z',
                        },
                    },
                },
                icon_banner: {
                    data: {
                        id: 7,
                        attributes: {
                            name: 'dv3_container.svg',
                            alternativeText: null,
                            caption: null,
                            width: 330,
                            height: 226,
                            formats: null,
                            hash: 'dv3_container_8fd883fc5a',
                            ext: '.svg',
                            mime: 'image/svg+xml',
                            size: 80.08,
                            url: '/uploads/dv3_container_8fd883fc5a.svg',
                            previewUrl: null,
                            provider: 'local',
                            provider_metadata: null,
                            createdAt: '2024-01-26T07:29:27.454Z',
                            updatedAt: '2024-01-26T07:29:27.454Z',
                        },
                    },
                },
            },
        },
        {
            id: 4,
            attributes: {
                createdAt: '2024-01-25T05:27:01.609Z',
                updatedAt: '2024-01-26T07:30:39.121Z',
                publishedAt: '2024-01-25T05:30:41.911Z',
                ServiceGroupName: 'VNPT Security',
                short_description: 'Cung cấp dịch vụ an ninh thế hống bảo vệ máy chủ',
                priority_number: 4,
                status: true,
                Services: [],
                icon_dvService: {
                    data: {
                        id: 10,
                        attributes: {
                            name: 'dv4.svg',
                            alternativeText: null,
                            caption: null,
                            width: 52,
                            height: 52,
                            formats: null,
                            hash: 'dv4_ad939412a9',
                            ext: '.svg',
                            mime: 'image/svg+xml',
                            size: 12.52,
                            url: '/uploads/dv4_ad939412a9.svg',
                            previewUrl: null,
                            provider: 'local',
                            provider_metadata: null,
                            createdAt: '2024-01-26T07:30:33.784Z',
                            updatedAt: '2024-01-26T07:30:33.784Z',
                        },
                    },
                },
                icon_banner: {
                    data: {
                        id: 9,
                        attributes: {
                            name: 'dv4_security.svg',
                            alternativeText: null,
                            caption: null,
                            width: 261,
                            height: 212,
                            formats: null,
                            hash: 'dv4_security_3628005a29',
                            ext: '.svg',
                            mime: 'image/svg+xml',
                            size: 198.82,
                            url: '/uploads/dv4_security_3628005a29.svg',
                            previewUrl: null,
                            provider: 'local',
                            provider_metadata: null,
                            createdAt: '2024-01-26T07:30:12.924Z',
                            updatedAt: '2024-01-26T07:30:12.924Z',
                        },
                    },
                },
            },
        },
        {
            id: 5,
            attributes: {
                createdAt: '2024-01-25T05:27:26.091Z',
                updatedAt: '2024-01-26T07:32:54.018Z',
                publishedAt: '2024-01-25T05:30:38.128Z',
                ServiceGroupName: 'VNPT Database',
                short_description:
                    'Cho phép khách hàng các thiết lập, vận hành và khả năng mở rộng CSDL trên nền tảng điện toán đám mây',
                priority_number: 5,
                status: false,
                Services: [],
                icon_dvService: {
                    data: {
                        id: 12,
                        attributes: {
                            name: 'dv6.svg',
                            alternativeText: null,
                            caption: null,
                            width: 54,
                            height: 56,
                            formats: null,
                            hash: 'dv6_de83926400',
                            ext: '.svg',
                            mime: 'image/svg+xml',
                            size: 8.06,
                            url: '/uploads/dv6_de83926400.svg',
                            previewUrl: null,
                            provider: 'local',
                            provider_metadata: null,
                            createdAt: '2024-01-26T07:32:33.356Z',
                            updatedAt: '2024-01-26T07:32:33.356Z',
                        },
                    },
                },
                icon_banner: {
                    data: {
                        id: 11,
                        attributes: {
                            name: 'dv6_database.svg',
                            alternativeText: null,
                            caption: null,
                            width: 245,
                            height: 226,
                            formats: null,
                            hash: 'dv6_database_186fe2f11b',
                            ext: '.svg',
                            mime: 'image/svg+xml',
                            size: 284.22,
                            url: '/uploads/dv6_database_186fe2f11b.svg',
                            previewUrl: null,
                            provider: 'local',
                            provider_metadata: null,
                            createdAt: '2024-01-26T07:31:03.243Z',
                            updatedAt: '2024-01-26T07:31:03.243Z',
                        },
                    },
                },
            },
        },
        {
            id: 7,
            attributes: {
                createdAt: '2024-01-25T05:28:13.571Z',
                updatedAt: '2024-01-26T07:34:33.123Z',
                publishedAt: '2024-01-25T05:30:46.369Z',
                ServiceGroupName: 'VNPT Web & Content Delivery',
                short_description:
                    'Cung cấp các nền tảng Web và phân phối nội dung như API GW, CDN',
                priority_number: 7,
                status: true,
                Services: [],
                icon_dvService: {
                    data: {
                        id: 14,
                        attributes: {
                            name: 'dv8.svg',
                            alternativeText: null,
                            caption: null,
                            width: 58,
                            height: 58,
                            formats: null,
                            hash: 'dv8_57bcaf398c',
                            ext: '.svg',
                            mime: 'image/svg+xml',
                            size: 7.55,
                            url: '/uploads/dv8_57bcaf398c.svg',
                            previewUrl: null,
                            provider: 'local',
                            provider_metadata: null,
                            createdAt: '2024-01-26T07:34:28.844Z',
                            updatedAt: '2024-01-26T07:34:28.844Z',
                        },
                    },
                },
                icon_banner: {
                    data: {
                        id: 13,
                        attributes: {
                            name: 'dv9_web.svg',
                            alternativeText: null,
                            caption: null,
                            width: 322,
                            height: 201,
                            formats: null,
                            hash: 'dv9_web_8461815b12',
                            ext: '.svg',
                            mime: 'image/svg+xml',
                            size: 1295.08,
                            url: '/uploads/dv9_web_8461815b12.svg',
                            previewUrl: null,
                            provider: 'local',
                            provider_metadata: null,
                            createdAt: '2024-01-26T07:33:43.258Z',
                            updatedAt: '2024-01-26T07:33:43.258Z',
                        },
                    },
                },
            },
        },
        {
            id: 1,
            attributes: {
                createdAt: '2024-01-23T09:08:52.969Z',
                updatedAt: '2024-01-27T15:49:39.926Z',
                publishedAt: '2024-01-23T09:16:15.460Z',
                ServiceGroupName: 'VNPT Compute',
                short_description:
                    'Là dịch vụ máy chủ áo cho phép khởi tạo nhanh, nâng cấp tài nguyên trên máy chủ ảo theo nhu cầu nhanh chóng',
                priority_number: 1,
                status: true,
                Services: [
                    {
                        id: 1,
                        service_name: 'Cloud Server',
                        service_description:
                            'Cloud ServerCloud ServerCloud ServerCloud ServerCloud ServerCloud ServerCloud ServerCloud ServerCloud ServerCloud ServerCloud ServerCloud ServerCloud ServerCloud ServerCloud ServerCloud ServerCloud Server',
                        status: null,
                        priority_number: null,
                    },
                    {
                        id: 2,
                        service_name: 'Cloud GPU',
                        service_description:
                            'Cloud GPUCloud GPUCloud GPUCloud GPUCloud GPUCloud GPUCloud GPUCloud GPUCloud GPUCloud GPUCloud GPUCloud GPUCloud GPUCloud GPUCloud GPUCloud GPU',
                        status: null,
                        priority_number: null,
                    },
                ],
                icon_dvService: {
                    data: {
                        id: 4,
                        attributes: {
                            name: 'dv1.svg',
                            alternativeText: null,
                            caption: null,
                            width: 58,
                            height: 58,
                            formats: null,
                            hash: 'dv1_21dfba81f2',
                            ext: '.svg',
                            mime: 'image/svg+xml',
                            size: 17.16,
                            url: '/uploads/dv1_21dfba81f2.svg',
                            previewUrl: null,
                            provider: 'local',
                            provider_metadata: null,
                            createdAt: '2024-01-26T07:24:35.729Z',
                            updatedAt: '2024-01-26T07:24:35.729Z',
                        },
                    },
                },
                icon_banner: {
                    data: {
                        id: 3,
                        attributes: {
                            name: 'dv1_banner.svg',
                            alternativeText: null,
                            caption: null,
                            width: 253,
                            height: 197,
                            formats: null,
                            hash: 'dv1_banner_ab02a21006',
                            ext: '.svg',
                            mime: 'image/svg+xml',
                            size: 126.26,
                            url: '/uploads/dv1_banner_ab02a21006.svg',
                            previewUrl: null,
                            provider: 'local',
                            provider_metadata: null,
                            createdAt: '2024-01-26T07:24:16.856Z',
                            updatedAt: '2024-01-26T07:24:16.856Z',
                        },
                    },
                },
            },
        },
        {
            id: 2,
            attributes: {
                createdAt: '2024-01-23T09:13:07.337Z',
                updatedAt: '2024-01-27T15:56:04.596Z',
                publishedAt: '2024-01-23T09:16:15.460Z',
                ServiceGroupName: 'VNPT Storage',
                short_description:
                    'Cung cấp dịch vụ cho phép người dùng có thể sử dụng để lưu trữ dữ liệu tùy theo nhu cầu cụ thể',
                priority_number: null,
                status: true,
                Services: [
                    {
                        id: 3,
                        service_name: 'Object Storage',
                        service_description:
                            'Object Storage\nObject Storage\nObject Storage\nObject Storage\nObject Storage\nObject Storage\nObject Storage\nObject Storage\nObject Storage\nObject Storage\nObject Storage\nObject Storage\nObject Storage\nObject Storage\n',
                        status: null,
                        priority_number: null,
                    },
                    {
                        id: 4,
                        service_name: 'File Storage',
                        service_description:
                            'File StorageFile StorageFile StorageFile StorageFile StorageFile StorageFile StorageFile StorageFile StorageFile StorageFile StorageFile StorageFile Storage',
                        status: null,
                        priority_number: null,
                    },
                ],
                icon_dvService: {
                    data: {
                        id: 6,
                        attributes: {
                            name: 'dv2.svg',
                            alternativeText: null,
                            caption: null,
                            width: 54,
                            height: 54,
                            formats: null,
                            hash: 'dv2_017bd5ff5f',
                            ext: '.svg',
                            mime: 'image/svg+xml',
                            size: 8.92,
                            url: '/uploads/dv2_017bd5ff5f.svg',
                            previewUrl: null,
                            provider: 'local',
                            provider_metadata: null,
                            createdAt: '2024-01-26T07:28:26.271Z',
                            updatedAt: '2024-01-26T07:28:26.271Z',
                        },
                    },
                },
                icon_banner: {
                    data: {
                        id: 5,
                        attributes: {
                            name: 'dv2_storage.svg',
                            alternativeText: null,
                            caption: null,
                            width: 288,
                            height: 200,
                            formats: null,
                            hash: 'dv2_storage_ccda7c8f6c',
                            ext: '.svg',
                            mime: 'image/svg+xml',
                            size: 122.15,
                            url: '/uploads/dv2_storage_ccda7c8f6c.svg',
                            previewUrl: null,
                            provider: 'local',
                            provider_metadata: null,
                            createdAt: '2024-01-26T07:28:08.673Z',
                            updatedAt: '2024-01-26T07:28:08.673Z',
                        },
                    },
                },
            },
        },
    ],
    meta: {
        pagination: {
            page: 1,
            pageSize: 25,
            pageCount: 1,
            total: 8,
        },
    },
};
