import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from "react-chat-engine-advanced";
import { usePostMessageMutation } from "../states/API";
import { MessageForm } from "react-chat-engine-advanced";

const projectId = 'cfc030ef-536b-4071-ae47-87810bfca3c5';
function AIBot({props, activeChat}) {
	
	const [trigger] = usePostMessageMutation();
	const handleSubmit = (message) => {
		
		const form = {
			sender_username: props.username,
			text: message.text,
			activeChatId: activeChat.id,
		};
		message.sender_username = props.username;
		if (message.text.length > 0){
			props.onSubmit(message);
		}
		trigger(form);
	}
	return (
		<MessageForm 
			label={'Type here!'} 
			style={{
				"maxWidth": "600px",
				"border": "2px solid black"
		  	}} 
			attachmentInputIconStyle={{
				"border": "2px solid black"
			}}

			onSubmit={handleSubmit} 
		/>
	)
}

export default function Chat({username = "cinnamon", password="123456"}) {
	const chatProps = useMultiChatLogic(projectId, username, password);
	return (
		<div style={{ fontFamily: 'Rubik'}}>
			<MultiChatSocket {...chatProps} />
			<MultiChatWindow  {...chatProps}
				style={{ height: '100vh', fontFamily: 'Roboto' }}
				renderMessageForm={(props) => {
					return <AIBot 
								props={props} 
								activeChat={chatProps.chat} 
							/>
				}
			}/>
		</div>
	);
};
