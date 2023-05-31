import cn from 'classnames';
import React from 'react';

import { Button, Icon } from '@/components/atoms';
import LightningIcon from '@assets/icons/lightning.svg';

import type { SubscribeButtonProps } from './SubscribeButton.types';

import styles from './SubscribeButton.module.scss';

export const SubscribeButton: React.FC<SubscribeButtonProps> = ({ className, children, href }) => (
	<Button
		className={cn(styles['subscribe-btn'], className)}
		icon={<Icon icon={LightningIcon} width={24} height={32} data-testid="subscribe-btn__icon" />}
		href={href}
		size="full"
		variant="secondary"
	>
		{children}
	</Button>
);
