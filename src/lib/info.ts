import { DateTime } from 'luxon';

import bannerImg from './images/해물찜1.png';

type TRoute = {
  title: string;
  route: string;
};

type TFlooting = (
  | {
      title: string;
    }
  | { icon: string }
) & {
  route: string;
};

export type TBoundType = 'instagram' | 'facebook' | 'kakao' | 'naver' | 'coopangEats';
type TOutbound = {
  type: TBoundType;
  href: string;
};

type TPopup = {
  href: string;
  url: string;
  startDate?: Date;
  endDate?: Date;
};

type THero = {
  title: string;
  description: string;
  buttonValue?: string;
  buttonHref?: string;
  backgroundImage?: string;
};

/* 회사 정보 * */
export const companyInfo = {
  address: '경기 용인시 수지구 풍덕천동 716-15',
  roadAddress: '풍덕천로148번길 5-15 1층',
  kakaoMap: 'https://place.map.kakao.com/908702136',
  companyNumber: '729-07-05527',
  companyName: '찜&장',
  companyAgent: '엄영미',
  companyPhone: '050-7997-3767',
  email: 'roggur6366@naver.com',
};

export const logo = '';

/* 페이지 정보 * */
export const routes: TRoute[] = [
  { title: '찜앤장', route: '/#banner' },
  { title: '가게소개', route: '/#company' },
  { title: '메뉴소개', route: '/#menus' },
  { title: '문의하기', route: '/#contect' },
];

export const flooting: TFlooting[] = [{ title: '문의하기', route: '/#contect' }];

export const outbound: TOutbound[] = [];

/* 메인 페이지 정보 * */
export const hero: THero = {
  title: 'FRESH SEAFOOD',
  description: '찜&장은 늘 맛있고 신선한 음식으로 보답합니다.',
  backgroundImage: bannerImg,
  buttonHref: '/connect',
};
