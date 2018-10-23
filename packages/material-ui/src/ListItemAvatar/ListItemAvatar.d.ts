import { StandardProps } from '../StandardProps';

export interface ListItemAvatarProps extends StandardProps<{}, ListItemAvatarClassKey> {}

export type ListItemAvatarClassKey = 'root' | 'icon';

declare const ListItemAvatar: React.ComponentType<ListItemAvatarProps>;

export default ListItemAvatar;
