import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";

type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Add = (props: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Form submit Axiso.post ${props.slug}/`)
  }
  return (
    <div className="add">
        <div className="modal">
            <span className="close" onClick={() => props.setOpen(false)}>X</span>
            <h1>Add new {props.slug}</h1>
            <form onSubmit={handleSubmit}>
                {props.columns
                .filter(column => column.field !== 'id' && column.field !== 'img')
                .map( (column) => (
                    <div className="item">
                        <label>{column.headerName}</label>
                        <input type={column.type} placeholder={column.field} />
                    </div>
                ))}
                <button>Send</button>
            </form>
        </div>
    </div>
  )
}

export default Add;
