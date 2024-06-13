import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
// 作用: 给被装饰对象添加一个metadata
export const IsPublic = () => SetMetadata(IS_PUBLIC_KEY, true);
