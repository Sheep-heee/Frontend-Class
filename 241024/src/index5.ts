class Student {
  // private name;
  // protected age;
  // public grade;

  constructor(
    private name: string,
    protected age: number,
    public grade: number
  ) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

const studentB = new Student("David", 20, 2);

class StudentDeveloper extends Student {
  favoritSkill;

  constructor(name: string, age: number, grade: number, favoritSkill: string) {
    super(name, age, grade);
    this.favoritSkill = favoritSkill;
  }

  programming() {
    console.log(`${this.favoritSkill}로 프로그래밍 합니다!`);
  }
}

const studentC = new StudentDeveloper("Ronaldo", 40, 2, "TS");

console.log(studentC.programming());
