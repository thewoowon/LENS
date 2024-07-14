type MessageType = {
    id: number;
    message_text: string;
    message_type: "chat" | "sql" | "schema";
    sender_type: "user" | "lens" | "system";
    session_id: number;
    timestamp: string;
    user_id: number;
}

type MessageWithSessionType = MessageType & {
    session_code: string;
}

type TableType = {
    columns: ColumnType[];
    foreign_keys: string[];
    primary_key: string[];
    table_name: string;
}

type ColumnType = {
    column_name: string;
    column_type: string;
}