import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forms-and-more';
  names = `מה שלא יודעים לא כואב
אמא עליזה
אחראית משמרת
פחד ממים
חלון אכילה
קורס על בסיסי
סטייק
שורפת אין דרך חזרה
ניתוחי לב
צ'וס יור פייטס
שמונה 16
סקוטלנד
בית ספר דינה לאחיות
סבא שלמה
תושה
אבלינה דה רוטשילד (התיכון)
אפרסמון
אחות
איך נעמה בוכה
ועדת חסד
ספריה
אלוני שילה
מרוקו
טבעת יהלומים
ספיר
אלרגיה לספורט
צ'יפס
outlander
תילים שית תילים תילים
ירושלים
Sefora
החול בים
לא צריכה פיפי אף פעם
אוברולים
לפטיני
ירין שחף
הממשלתי
מכון טל
אדל
שניידר
גילה (שכונה)
אמא חטובה
פסנתר
מדרשת שילת
ארוחה ליולדות`;

words = this.names.split('\n');
}
