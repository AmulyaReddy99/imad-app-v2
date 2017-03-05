/*
 * File: FacePamphlet.java
 * -----------------------
 * implement FacePamphlet -- a simplified version of Facebook.
 */

//import java.awt.Color;
import java.awt.Component;
import java.awt.event.ActionEvent;
//import java.awt.event.MouseEvent;
import java.util.ArrayList;

import javax.swing.JButton;

import javax.swing.JLabel;
import javax.swing.JTextField;

import acm.graphics.GImage;
import acm.graphics.GLabel;
import acm.graphics.GObject;
import acm.program.*;
import stanford.facepamphlet.*;


public class FacePamphlet extends GraphicsProgram implements FPConstants {

/* Initializes the application */

	public void init() {
		repository = new FPRepositoryStub("eroberts", "Eric Roberts");
		// You fill in the rest

	eric_roberts=new JButton("eric roberts");
		friends=new FPScrollableList();
		friends.add("cs106A");
		
	visit=new JButton("visit");
		send_req=new JTextField(15);
	request=new JButton("request");
		pending=new FPScrollableList();  //overriding...
		
		pending.add("chris pitch");
		pending.add("juile zusenskie");
		pending.add("mehran sahami");
	accept=new JButton("accept");
	reject=new JButton("reject");
		status=new JTextField(15);
	change_status=new JButton("change_status");
		image=new JTextField(15);	
	change_image=new JButton("change_image");
		send = new JButton("send");
	
	add(eric_roberts,WEST);
	add(new JLabel("friends: "),WEST);
	add(friends,WEST);
	
	add(visit,WEST);	
	add(new JLabel("send friend a request: "),WEST);
	add(send_req,WEST);	
	add(request,WEST);
	add(new JLabel("pending requests: "),WEST);
	add(pending,WEST);
	add(accept,WEST);
	add(reject,WEST);
	add(new JLabel("status: "),WEST);
	add(status,WEST);	
	add(change_status,WEST);
	add(new JLabel("image: "),WEST);
	add(image,WEST);	
	add(change_image,WEST);

	wall = new FPScrollableTextArea();
	add(new JLabel("My wall: "),EAST);
	add(wall,EAST);
	msgar = new FPScrollableTextArea();
	add(new JLabel("Message Area: "),EAST);
	add(msgar,EAST);
	add(send,EAST);
	pic1 = new GImage("ayn.jpg");
	add(pic1,10,10);
	listOfFriends = new ArrayList<String>();
	
	status1 = new GLabel("i am new to facepamphlet!!!");
	add(status1,10,getHeight()/2-50);
	
	addActionListeners();
}
	
public void actionPerformed(ActionEvent e){

	if(e.getActionCommand().equals("visit")){
		//link to another persons profile
		println(listOfFriends);// from ConsoleProgram :(
	}
	if(e.getActionCommand().equals("request")){
			myfriends = send_req.getText();
			listOfFriends.add(myfriends);
			friends.add(myfriends);
	}
	
	if(e.getActionCommand().equals("accept")){
		String myNEWfrnd = pending.getSelectedName();
		listOfFriends.add(myNEWfrnd);
		friends.add(myNEWfrnd);
		FPScrollableList.removeName(pending.getSelectedName());
		//after accepting, display of that member should disappear
	}
			
	if(e.getActionCommand().equals("reject")){
		FPScrollableList.removeName(pending.getSelectedName());
	}
		
	if(e.getActionCommand().equals("change_status")){
		remove(status1);
		GLabel status2 = new GLabel(status.getText());
		add(status2,10,getHeight()/2-50);
		status1=status2;
	}
	if(e.getActionCommand().equals("change_image")){
		remove(pic1);
		GImage pic2 = new GImage(image.getText());
		add(pic2,10,10);
		pic2=pic1;
	}
	if(e.getActionCommand().equals("send")){

		msgar.setEditable(true);
		message += msgar.getText() + "\n";
		wall.setText(message);
		msgar.clear();
	}

}

/* Instance variables */
private String message="\n";

private GImage pic1=null;
private GLabel status1=null;
private String myfriends=null;
private ArrayList<String> listOfFriends;
private FPScrollableTextArea wall;
private FPScrollableList friends;
private FPScrollableList pending;
private JTextField status;
private JTextField image;
private JTextField send_req;
private JButton eric_roberts;	
private JButton change_image;
private JButton change_status;
private JButton accept;
private JButton reject;
private JButton request;
private JButton visit;
private JButton send;
private FPScrollableTextArea msgar;

private FPRepository repository;

}
