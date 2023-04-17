import React from "react";
import cn from "classnames";
import styles from "./button.module.scss";

interface ButtonProps {
	/**
	 * просмотр фильма
	 */
	primary?: boolean;

	/**
	 * кастомный бекграунд(родной прозрачный)
	 */
	backgroundColor?: string;

	size?: "small" | "medium" | "large";
	/**
	 * содержимое кнопки
	 */
	label?: string;
	/**
	 * отвечает за оплату
	 */
	isPay?: boolean;
	/**
	 * параметры границы
	 */
	border?: string;
	/**
	 * свг фон у кнопки
	 */
	backgroundSvg?: boolean;
	onClick?: () => void;
}

export const Button = ({
	primary = false,
	size = "medium",
	backgroundColor = "",
	border,
	label,
	isPay = false,
	backgroundSvg = false,
	...props
}: ButtonProps) => {
	console.log([styles[`button__background__${backgroundColor}`]]);
	const btnClass = cn({
		[styles.button]: true,
		[styles.button__primary]: primary,
		[styles[`button__${size}`]]: true,
		[styles.button__pay]: isPay,
		[styles[`button__background__${backgroundColor}`]]: !!backgroundColor,
		[styles[`button__background__${border}`]]: !!border,
		[styles.button__backgroundImage__svg]: backgroundSvg,
	});

	return (
		<button type="button" className={btnClass}>
			{label}
		</button>
	);
};