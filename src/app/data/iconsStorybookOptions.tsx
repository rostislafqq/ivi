import React from 'react';

import BookmarkIcon from '@assets/icons/bookmark.svg';
import DownloadIcon from '@assets/icons/download.svg';
import PlayIcon from '@assets/icons/play.svg';
import SearchIcon from '@assets/icons/search.svg';

import { Icon } from '@components/atoms';

export const mapping = {
	play: <Icon icon={PlayIcon} width={16} />,
	search: <Icon icon={SearchIcon} width={16} />,
	download: <Icon icon={DownloadIcon} width={16} />,
	bookmark: <Icon icon={BookmarkIcon} width={16} />,
};

export const options = ['play', 'search', 'download', 'bookmark'];
