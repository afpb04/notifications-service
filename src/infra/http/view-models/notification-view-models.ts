import { Notification } from '@application/entities/notification';

export class NotificationViewModels {
  static toHTTP(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
    };
  }
}
