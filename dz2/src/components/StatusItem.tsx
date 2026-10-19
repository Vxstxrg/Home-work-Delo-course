export type StatusItemProps = {
	Header: string;
	title: string;
	subtitle: string;
}

function StatusItem({ Header, title, subtitle }: StatusItemProps) {
	return (
		<div className="Status-item">
			<span className="Status-item__header">{Header}</span>
			<span className="Status-item__title">{title}</span>
			<span className="Status-item__subtitle">{subtitle}</span>
		</div>
	)
}
export default StatusItem;