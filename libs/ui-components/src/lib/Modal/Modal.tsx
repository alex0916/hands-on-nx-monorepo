import { HTMLAttributes, ReactNode } from 'react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
	isDisplayed: boolean;
	hideModal: () => void;
	header?: ReactNode;
	footer?: ReactNode;
}

export const Modal = ({ isDisplayed, hideModal, header, footer, children, className, ...props }: ModalProps) => {
	return isDisplayed ? (
		<>
			<div
				className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
				onClick={hideModal}
				role="dialog"
				{...props}
			>
				<div
					className={`relative w-auto my-6 mx-auto max-w-3xl rounded-lg bg-white ${className}`}
					onClick={(event) => {
						event.stopPropagation();
					}}
				>
					<div className="rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none ">
						{header ? <div className="flex px-5 pt-5">{header}</div> : null}
						<div className="relative p-6 flex-auto">{children}</div>
						{footer ? <div className="flex items-center justify-end p-6">{footer}</div> : null}
					</div>
				</div>
			</div>
			<div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
		</>
	) : null;
};
