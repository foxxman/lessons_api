import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Lesson } from './Lesson';
import { Teacher } from './Teacher';

@Entity('lesson_teacher')
export class LessonTeacher {
  @PrimaryColumn({ name: 'lesson_id' })
  lessonId!: number;

  @PrimaryColumn({ name: 'teacher_id' })
  teacherId!: number;

  @ManyToOne(
    () => Lesson,
    (lesson) => lesson.teachers,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'lesson_id', referencedColumnName: 'id' }])
  lessons!: Lesson[];

  @ManyToOne(
    () => Teacher,
    (teacher) => teacher.lessons,
    {onDelete: 'NO ACTION', onUpdate: 'NO ACTION'}
  )
  @JoinColumn([{ name: 'teacher_id', referencedColumnName: 'id' }])
  teachers!: Teacher[];
}