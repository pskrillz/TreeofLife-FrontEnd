import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit {
  lifeCategories: Array<any>;

  constructor() { 
    this.lifeCategories = [
      {
        title: "Career",
        expand: false,
        intro: "How is your career going? ",
        description:
          "How satisfied are you with your job, is it the job that you had imagined or would you rather pursue another career? Does the job bring you happiness and satisfaction? Does the job earn enough for a living? Are you excited to go to work? Are you learning and growing in your career? Is your career rewarding (financially and otherwise)?",
        number: 0,
        img: "assets/imgs/career-photo.jpg",
      },
      {
        title: "Finances",
        expand: false,
        intro:
          "This is not about how much you have but rather how you relate to money.",
        description:
          "Are all incomes enough to meet all basic needs and other needs? Are you not dependent on loans? Do you not have any debts? Is money the only thing that makes a person happy? Etc. Do you feel financially secure? Are you able to do what you want to do without constraints? Are there things you would do if you have bigger financial resources?",
        number: 0,
        img: "assets/imgs/finances-photo.jpg",
      },
      {
        title: "Personal Growth",
        expand: false,
        intro:
          "People who are truly successful are continuously committed to learning and improving themselves.",
        description:
          "How important is the process of self-development for you. How satisfied are you with the level of your personal growth? Do you invest enough time in it? Some other aspects you can include in this investigation are education, training, coaching, reading. Are you learning new skills? Are you maturing? Do you have clear and highly motivating goals for your life?",
        number: 0,
        img: "assets/imgs/personal-growth-photo.jpg",
      },
      {
        title: "Health",
        expand: false,
        intro:
          "We all take our health for granted until it lets us down. How is yours?",
        description:
          "How physically and mentally healthy are you? How do you feel? Are you satisfied with your appearance and weight? Do you have any physical discomforts? To what extent are you engaged in sports?  Do you have enough energy pursue your goals every day? Are you able to maintain a healthy weight? Are their people who you admire as being full of health and vitality?",
        number: 0,
        img: "assets/imgs/health-photo.jpg",
      },
      {
        title: "Family",
        expand: false,
        intro: "Family life is very important.",
        description:
          "Although family life should be loving, caring, and supportive it often is not for a variety of reasons such as crying babies, wild teenage sons or daughters, or constant arguments and tension. These all represent a huge challenge and will affect other areas of your life such as work / studies, relationships, and so on. In this respect, family life to you could mean a single unit or a more extended family. Whatever family life means to you give yourself a current score.",
        number: 0,
        img: "assets/imgs/family-photo.jpg",
      },
      {
        title: "Relationships",
        expand: false,
        intro:
          // "Consider the key relationship you have whether it is with your boyfriend/girlfriend, husband/wife/friend, or family member.",
          "Consider the key relationship you have with your partner.",
        description:
          "When it comes to identifying the balance in the relationships you have to identify how fulfilled and satisfied you are with the people around you. How is the quality of your relationship(s)? And how you are managing them in your life? Do you spend enough time with your family, partner, kids, friends? Do you have people you care about (and who care about you) in your life? Do you have meaningful experiences with others? Do you feel loved?",
        number: 0,
        img: "assets/imgs/relationships-photo.jpg",
      },
      {
        title: "Social Life",
        expand: false,
        intro:
          "A vital component of life is the need to get on and interact with people.",
        description:
        // Description of social life adapted to Maurice's "family and friends" section
          "Are friends supportive, unconditional and trustworthy? Can friendships be built upon and friends always be counted on? To what extent do you spend your free time with family and friends? Do I talk openly to my family members? Can I trust them completely? How often do I spend quality time with them?",
        number: 0,
        img: "assets/imgs/social-life-photo.jpg",
      },
      {
        title: "Attitude",
        expand: false,
        intro:
          "Attitude is vital and can influence every aspect of your life. Is your glass half full or half empty?",
        description:
        // Adapted to Maurice's "Emotional well-being section"
          "How balanced do you feel emotionally? How aware are you of your emotions? How do you process/cope with your emotions?",
        number: 0,
        img: "assets/imgs/attitude-photo.jpg",
      },
      // No "overall life vision" section as of yet
    ];
  }

  ngOnInit(): void {
  }

}
